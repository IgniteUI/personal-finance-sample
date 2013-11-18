using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PersonalFinance.Models;

namespace PersonalFinance.Controllers
{
    public abstract class BaseDBController : Controller
    {
        /*
         * Wraps the DBContext object for database access. Overrides IDisposable to release DB resources.
         */
        private PersonalFinanceContainer _dbContext = new PersonalFinanceContainer();
        protected PersonalFinanceContainer DbContext
        {
            get
            {
                if (_dbContext == null)
                    _dbContext = new PersonalFinanceContainer();

                return _dbContext;
            }
        }

        #region IDisposable

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

        #endregion

    }
}
