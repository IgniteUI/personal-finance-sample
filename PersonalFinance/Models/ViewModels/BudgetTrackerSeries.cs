using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class BudgetTrackerSeries
    {
        public string Category { get; set; }
        public decimal Budget { get; set; }
        public decimal Spent { get; set; }
    }
}