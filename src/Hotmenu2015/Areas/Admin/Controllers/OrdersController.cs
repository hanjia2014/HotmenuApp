using System;
using System.Linq;
using Microsoft.AspNet.Mvc;
using HotmenuApp.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HotmenuApp.Areas.Admin.Controllers
{
    public class OrdersController : AdminControllerBase
    {
        private Repository<Order, Guid> _repository;
        public OrdersController()
        {
            _repository = new Repository<Order, Guid>();
            _repository.findElement += new FindElement<Order, Guid>(FindOrder);
        }

        private bool FindOrder(Order t, Guid id)
        {
            return t.Id.Equals(id);
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(_repository.Get().ToList());
        }

        public IActionResult OrderDetails(Guid id)
        {
            ViewBag.SelectedOrder = _repository.GetByID(id);
            return RedirectToAction("Index");
        }
    }
}
