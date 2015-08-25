using System.Linq;
using Microsoft.AspNet.Mvc;
using HotmenuApp.Models;
using Microsoft.AspNet.Authorization;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HotmenuApp.Areas.Admin.Controllers
{
    public class CategoryController : AdminControllerBase
    {
        private HotmenuDbContext db = new HotmenuDbContext();
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public ActionResult Edit(int id)
        {
            var category = db.Categories.First(p => p.Id == id);
            if (category == null)
            {
                return HttpNotFound();
            }
            return View(category);
        }

    }
}
