

using HotmenuApp.Areas.Admin.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Rendering;
using System.Collections.Generic;
using System.Linq;

namespace HotmenuApp.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ManagerController : Controller
    {
        private ApplicationDbContext _appDbContext;

        public ManagerController()
        {
            _appDbContext = new ApplicationDbContext();
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            var items = new List<SelectListItem>();
            if(_appDbContext.Roles != null)
            {
                _appDbContext.Roles.ToList().ForEach(p => items.Add(new SelectListItem { Text = p.Name, Value = p.Id }));
                ViewBag.Roles = items;
            }
            return View();
        }
    }
}
