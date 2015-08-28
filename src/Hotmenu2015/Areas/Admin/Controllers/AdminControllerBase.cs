using HotmenuApp.Models;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

namespace HotmenuApp.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize]
    public class AdminControllerBase : Controller
    {
        private HotmenuDbContext db;
        public HotmenuDbContext DbContext
        {
            get
            {
                return db ?? new HotmenuDbContext();
            }
        }
    }
}
