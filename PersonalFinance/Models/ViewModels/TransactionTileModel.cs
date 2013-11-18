using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class TransactionTileModel
    {
        public IEnumerable<ViewModels.Expense> Transactions { get; set; }
        public IEnumerable<ViewModels.CategorySummary> Categories { get; set; }
    }
}