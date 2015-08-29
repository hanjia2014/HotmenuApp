﻿using HotmenuApp.Models;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

namespace HotmenuApp.Areas.Admin.Controllers
{
    public class AdminControllerBaseWithRepository<T, K> : AdminControllerBase where T : class
    {
        private IRepository<T, K> repository = null;

        public AdminControllerBaseWithRepository()
        {
            repository = new Repository<T, K>();
        }

        public void Insert(T t)
        {
            repository.Insert(t);
        }

        public void Save()
        {
            repository.Save();
        }
    }

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
