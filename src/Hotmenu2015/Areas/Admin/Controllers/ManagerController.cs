using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Authorization;
using HotmenuApp.Models;

namespace HotmenuApp.Areas.Admin.Controllers
{
    public class ManagerController : AdminControllerBase
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewBag.Categories = DbContext.Categories;
            ViewBag.MenuItems = DbContext.MenuItems;
            return View();
        }

        public IActionResult CategoryDetails(int id)
        {
            var category = DbContext.Categories.First(p => p.Id == id);
            return View(category);
        }
    }
}
