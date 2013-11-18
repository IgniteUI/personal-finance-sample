using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PersonalFinance.Models.ViewModels;

namespace PersonalFinance.Controllers
{
    public class DataGenerationController : BaseDBController
    {
        private const int MONTHS_START = -3;
        private const int MONTHS_END = 24;
        //
        // GET: /DataGenerator/

        public ActionResult Index()
        {
            bool dataGenerated = false;

            if(!AreDataPresent(CategoryTypesEnum.Income))
            {
                dataGenerated = GenerateIncomeData() > 0;
            }

            if (!AreDataPresent(CategoryTypesEnum.Expenses))
            {
                dataGenerated = GenerateExpensesData() > 0;
            }

            if (!AreDataPresent(CategoryTypesEnum.Assets))
            {
                dataGenerated = GenerateAssetsData() > 0;
            }

            if (!AreDataPresent(CategoryTypesEnum.Liabilities))
            {
                dataGenerated = GenerateLiabilitiesData() > 0;
            }

            if (dataGenerated)
            {
                ViewBag.Result = "Data added to database";
            }
            else
            {
                ViewBag.Result = "No data generated";
            }

            return View();
        }

        #region Private Methods

        private bool AreDataPresent(CategoryTypesEnum categoryType)
        {
            DateTime startDate = DateTime.Now.AddMonths(MONTHS_START);
            return DbContext.Transactions.Any(item => 
                item.Date >=  startDate && item.Category.CategoryTypesId == (int)categoryType);
        }

        private int GenerateLiabilitiesData()
        {
            return GenerateItems(CategoryTypesEnum.Liabilities, "Liability");
        }

        private int GenerateAssetsData()
        {
            return GenerateItems(CategoryTypesEnum.Assets, "Asset");
        }

        private int GenerateExpensesData()
        {
            return GenerateTransactions(CategoryTypesEnum.Expenses);
        }

        private int GenerateIncomeData()
        {
            return GenerateTransactions(CategoryTypesEnum.Income);
        }

        private int GenerateTransactions(CategoryTypesEnum transactionCategory)
        {
            DateTime currentDate = DateTime.Now.AddMonths(MONTHS_START);
            DateTime endDate = DateTime.Now.AddMonths(MONTHS_END);

            Random categoriesRandomizer = new Random();
            Random daysRandomizer = new Random();
            Random amountRandomizer = new Random();
            Random partnerRandomizer = new Random();

            int minPartner = DbContext.Partners.Min(item => item.Id);
            int maxPartner = DbContext.Partners.Max(item => item.Id);
            List<Models.Categories> incomeCategories = DbContext.Categories
                .Where(item => item.CategoryTypesId == (int)transactionCategory).ToList();

            while (currentDate <= endDate)
            {
                currentDate = currentDate.AddDays(daysRandomizer.Next(5, 12));
                double amount = amountRandomizer.NextDouble() * 400 + 20;
                int partnerId = partnerRandomizer.Next(minPartner, maxPartner);
                int categoryId = incomeCategories[categoriesRandomizer.Next(incomeCategories.Count - 1)].Id;

                Models.Transactions transaction = new Models.Transactions
                {
                    CategoriesId = categoryId,
                    Amount = Convert.ToDecimal(Math.Round(amount, 2)),
                    Date = currentDate,
                    PartnersId = partnerId
                };
                DbContext.Transactions.Add(transaction);
            }

            return DbContext.SaveChanges();
        }

        private int GenerateItems(CategoryTypesEnum itemCategory, string itemPrefix)
        {
            DateTime currentDate = DateTime.Now.AddMonths(MONTHS_START);
            DateTime endDate = DateTime.Now.AddMonths(MONTHS_END);

            Random categoriesRandomizer = new Random();
            Random daysRandomizer = new Random();
            Random amountRandomizer = new Random();
            Random partnerRandomizer = new Random();

            int nextItem = 1;
            int minPartner = DbContext.Partners.Min(item => item.Id);
            int maxPartner = DbContext.Partners.Max(item => item.Id);
            List<Models.Categories> incomeCategories = DbContext.Categories
                .Where(item => item.CategoryTypesId == (int)itemCategory).ToList();

            while (currentDate <= endDate)
            {
                currentDate = currentDate.AddDays(daysRandomizer.Next(20, 90));
                double amount = amountRandomizer.NextDouble() * 1000 + 100;
                int partnerId = partnerRandomizer.Next(minPartner, maxPartner);
                int categoryId = incomeCategories[categoriesRandomizer.Next(incomeCategories.Count - 1)].Id;

                Models.Item item = new Models.Item
                {
                    CategoriesId = categoryId,
                    DateAcquired = currentDate,
                    Value = Convert.ToDecimal(Math.Round(amount, 2)),
                    Name = itemPrefix + (nextItem++).ToString()
                };
                DbContext.Items.Add(item);
            }

            return DbContext.SaveChanges();
        }

        #endregion
    }
}
