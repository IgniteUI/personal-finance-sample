using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class NetWorthItem
    {
        public DateTime Date { get; set; }
        public decimal Assets { get; set; }
        public decimal Liabilities { get; set; }
        public decimal NetWorth { get; set; }
    }
}