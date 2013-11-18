using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class CategorySummary
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CategoryTypesId { get; set; }
        public decimal Total { get; set; }
    }
}