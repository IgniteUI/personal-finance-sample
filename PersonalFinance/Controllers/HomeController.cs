using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

using PersonalFinance.Models.DTO;
using PersonalFinance.Models;
using PersonalFinance.Models.ViewModels;
using System.Reflection;

namespace PersonalFinance.Controllers
{
    public class HomeController : BaseDBController
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            var showcaseLangauge = GetUserResourceFile(Request.Headers["Accept-Language"]);
            ViewBag.ResourceFile = showcaseLangauge.ResourceFile;
            ViewBag.Language = showcaseLangauge.Language;
            ViewBag.DllVersion = Assembly.GetExecutingAssembly().GetName().Version.ToString();
            return View();
        }

        [HttpPost]
        public JsonResult GetExpensesData(string startDate, string endDate)
        {
            var result = new JsonResult();

            DateTime start;
            DateTime end;

            var dateTimeStyle = System.Globalization.DateTimeStyles.None;
            var cultureInfo = System.Globalization.CultureInfo.InvariantCulture;

            if (DateTime.TryParseExact(startDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out start) &&
                DateTime.TryParseExact(endDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out end))
            {
                result.Data = new TransactionTileModel
                {
                    Transactions = Mapper.Map(GetSpending(start, end, CategoryTypesEnum.Expenses, DbContext).OrderBy(item => item.Date.Day)),
                    Categories = GetCategoriesSummary(start, end, CategoryTypesEnum.Expenses, DbContext).OrderBy(item => item.Name)
                };
            }

            return result;
        }

        [HttpPost]
        public JsonResult GetIncomeData(string startDate, string endDate)
        {
            var result = new JsonResult();

            DateTime start;
            DateTime end;

            var dateTimeStyle = System.Globalization.DateTimeStyles.None;
            var cultureInfo = System.Globalization.CultureInfo.InvariantCulture;

            if (DateTime.TryParseExact(startDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out start) &&
                DateTime.TryParseExact(endDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out end))
            {
                result.Data = new TransactionTileModel
                {
                    Transactions = Mapper.Map(GetSpending(start, end, CategoryTypesEnum.Income, DbContext).OrderBy(item => item.Date)),
                    Categories = GetCategoriesSummary(start, end, CategoryTypesEnum.Income, DbContext).OrderBy(item => item.Name)
                };
            }

            return result;
        }

        [HttpPost]
        public JsonResult GetAssetsData(string startDate, string endDate)
        {
            var result = new JsonResult();

            DateTime start;
            DateTime end;

            var dateTimeStyle = System.Globalization.DateTimeStyles.None;
            var cultureInfo = System.Globalization.CultureInfo.InvariantCulture;

            if (DateTime.TryParseExact(startDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out start) &&
                DateTime.TryParseExact(endDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out end))
            {
                result.Data = new ItemTileModel
                {
                    Transactions = Mapper.Map(GetOwnedItems(start, end, CategoryTypesEnum.Assets, DbContext)),
                    Categories = GetCategoriesSummaryItems(start, CategoryTypesEnum.Assets, DbContext)
                };
            }

            return result;
        }

        [HttpPost]
        public JsonResult GetLiabilitiesData(string startDate, string endDate)
        {
            var result = new JsonResult();

            DateTime start;
            DateTime end;

            var dateTimeStyle = System.Globalization.DateTimeStyles.None;
            var cultureInfo = System.Globalization.CultureInfo.InvariantCulture;

            if (DateTime.TryParseExact(startDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out start) &&
                DateTime.TryParseExact(endDate, "yyyyMMdd", cultureInfo, dateTimeStyle, out end))
            {
                result.Data = new ItemTileModel
                {
                    Transactions = Mapper.Map(GetOwnedItems(start, end, CategoryTypesEnum.Liabilities, DbContext)),
                    Categories = GetCategoriesSummaryItems(start, CategoryTypesEnum.Liabilities, DbContext)
                };
            }

            return result;
        }

        [HttpPost]
        public JsonResult GetBudgetTrackingData()
        {
            //  Get all spending grouped by category
            var startDate = DateTime.Now.AddYears(-1);
            var enddDate = DateTime.Now;
            var spending = from t in DbContext.Transactions.Include(table => table.Category).Include(table => table.Category.CategoryType)
                           where (t.Category.CategoryType.Id == (int)CategoryTypesEnum.Expenses)
                              && (t.Date >= startDate && t.Date <= enddDate)
                           group t by t.Category into tg
                           select new BudgetTrackerSeries
                           {
                               Category = tg.Key.Name,
                               Budget = tg.Key.Budget ?? 0,
                               Spent = tg.Sum(item => item.Amount)
                           };

            return new JsonResult
            {
                Data = spending
            };
        }

        [HttpPost]
        public JsonResult GetNetWorthData()
        {
            var beginning = DateTime.Now.AddYears(-1);
            var ordered = from item in DbContext.Items
                          where item.DateAcquired <= DateTime.Now
                            && item.DateAcquired >= beginning
                          orderby item.DateAcquired ascending
                          select item;

            decimal currentNetWorth = 0;
            decimal currentAssets = 0;
            decimal currentLb = 0;
            List<PersonalFinance.Models.ViewModels.NetWorthItem> netWorthData = new List<NetWorthItem>();
            foreach (var item in ordered)
            {
                if (item.Category.CategoryTypesId == (int)CategoryTypesEnum.Assets)
                {
                    currentNetWorth += item.Value;
                    currentAssets += item.Value;
                }
                else
                {
                    currentNetWorth -= item.Value;
                    currentLb += item.Value;
                }

                netWorthData.Add(new NetWorthItem
                    {
                        Date = item.DateAcquired,
                        NetWorth = currentNetWorth,
                        Assets = currentAssets,
                        Liabilities = currentLb
                    });
            }

            return new JsonResult
            {
                Data = netWorthData
            };
        }

        #region Private Methods

        private static IQueryable<Transactions> GetSpending(DateTime startDate, DateTime endDate,
            CategoryTypesEnum categoryType, PersonalFinanceContainer context)
        {
            var transactions = context.Transactions
                .Include(table => table.Category)
                //.Include(table => table.Category.CategoryType)
                .Include(table => table.Partner);

            return from transaction in transactions
                   where (transaction.Category.CategoryTypesId == (int)categoryType) &&
                       (transaction.Date >= startDate && transaction.Date <= endDate)
                   select transaction;
        }

        private static IQueryable<PersonalFinance.Models.Item> GetOwnedItems(DateTime startDate, DateTime endDate,
            CategoryTypesEnum assetType, PersonalFinanceContainer context)
        {
            return from asset in context.Items.Include(item => item.Category)
                   where (asset.Category.CategoryType.Id == (int)assetType && (asset.DateAcquired >= startDate) && asset.DateAcquired <= endDate)
                   orderby asset.DateAcquired
                   select asset;
        }

        private static IQueryable<CategorySummary> GetCategoriesSummary(DateTime startDate, DateTime endDate,
            CategoryTypesEnum categoryType, PersonalFinanceContainer context)
        {
            return from category in context.Categories.Include(table => table.Transactions)
                   where category.CategoryTypesId == (int)categoryType &&
                    category.Transactions.Count() > 0 &&
                    category.Transactions.Any(transaction => transaction.Date >= startDate && transaction.Date <= endDate)
                   select new CategorySummary
                   {
                       Id = category.Id,
                       Name = category.Name,
                       Total = category.Transactions.Sum(tran => tran.Amount)
                   };
        }

        private static IQueryable<CategorySummary> GetCategoriesSummaryItems(DateTime startDate,
            CategoryTypesEnum assetType, PersonalFinanceContainer context)
        {
            return from category in context.Categories.Include(item => item.Items)
                   where category.CategoryTypesId == (int)assetType &&
                    category.Items.Count() > 0 &&
                    category.Items.Any(item => item.DateAcquired >= startDate)
                   select new CategorySummary
                   {
                       Id = category.Id,
                       Name = category.Name,
                       Total = category.Items.Sum(item => item.Value)
                   };
        }

        private ShowcaseLanguage GetUserResourceFile(string acceptLanguage)
        {
            string i18nRelativePath = "~/Scripts/app/i18n/";
            string i18nDir = Server.MapPath(i18nRelativePath);
            //  Default to English if nothing else hints for a different language);
            ShowcaseLanguage result = new ShowcaseLanguage()
            {
                Language = "en",
                ResourceFile = i18nDir + "en" + ".js"
            };

            if (!string.IsNullOrWhiteSpace(acceptLanguage))
            {
                //  Get all languages the user accepts
                string[] languages = acceptLanguage.Split(';')[0].Split(',');

                foreach (var lang in languages)
                {
                    //  Check if a specific JS resource file exists
                    if (System.IO.File.Exists(i18nDir + lang + ".js"))
                    {
                        result.Language = lang;
                        break;
                    }
                    else
                    {   //  Check if a general JS resource file exists
                        string baseLang = lang.Split('-')[0];
                        if (System.IO.File.Exists(i18nDir + baseLang + ".js"))
                        {
                            result.Language = baseLang;
                            break;
                        }
                    }
                }
            }

            result.ResourceFile = Url.Content(string.Format("{0}{1}.js", i18nRelativePath, result.Language));
            return result;
        }

        #endregion

        #region Custom Data Structures

        class ShowcaseLanguage
        {
            public string ResourceFile { get; set; }
            public string Language { get; set; }
        }

        #endregion
    }
}
