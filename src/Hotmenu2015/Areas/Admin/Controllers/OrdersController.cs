using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using HotmenuApp.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HotmenuApp.Areas.Admin.Controllers
{
    public class OrdersController : AdminControllerBaseWithRepository<Order, Guid>
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(Get().ToList());
        }
    }
}
