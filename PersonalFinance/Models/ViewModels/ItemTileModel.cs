using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalFinance.Models.ViewModels
{
    public class ItemTileModel
    {
        public IEnumerable<ViewModels.Item> Transactions { get; set; }
        public IEnumerable<ViewModels.CategorySummary> Categories { get; set; }
    }
}