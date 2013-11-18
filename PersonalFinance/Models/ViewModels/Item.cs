using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateAcquired { get; set; }
        public decimal Value { get; set; }
        public string Category { get; set; }
    }
}