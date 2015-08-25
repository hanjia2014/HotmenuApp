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
        private HotmenuDbContext _hotmenuDbContext;
        public ManagerController()
        {
            _hotmenuDbContext = new HotmenuDbContext();
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewBag.Categories = _hotmenuDbContext.Categories;
            ViewBag.MenuItems = _hotmenuDbContext.MenuItems;
            return View();
        }

        public IActionResult CategoryDetails(int id)
        {
            var category = _hotmenuDbContext.Categories.First(p => p.Id == id);
            return View(category);
        }
    }
}
