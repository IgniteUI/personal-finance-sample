using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class Expense
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public string Category { get; set; }
        public string Partner { get; set; }
        public string Address { get; set; }
        public double? GeoLatitude { get; set; }
        public double? GeoLongitude { get; set; }
    }
}