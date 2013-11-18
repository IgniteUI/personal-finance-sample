using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.DTO
{
    public class Mapper
    {
        internal static IEnumerable<ViewModels.Expense> Map(IQueryable<Models.Transactions> transactions)
        {
            return
                from expense in transactions
                select new ViewModels.Expense
                {
                    Id = expense.Id,
                    Date = expense.Date,
                    Amount = expense.Amount,
                    Category = expense.Category.Name,
                    Partner = expense.Partner.Name,
                    Address = expense.Partner.Address,
                    GeoLatitude = expense.Partner.GeoLatitude,
                    GeoLongitude = expense.Partner.GeoLongitude
                };
        }

        internal static IEnumerable<ViewModels.Item> Map(IQueryable<Item> items)
        {
            return
                from item in items
                select new ViewModels.Item
                {
                    Id = item.Id,
                    Name = item.Name,
                    Value = item.Value,
                    Category = item.Category.Name,
                    DateAcquired = item.DateAcquired
                };
        }
    }
}