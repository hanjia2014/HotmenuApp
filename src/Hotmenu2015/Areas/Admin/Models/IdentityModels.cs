using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace HotmenuApp.Areas.Admin.Models
{
    public class HotmenuAdmin : IdentityUser
    {
    }

    public class HotmenuUserRole : IdentityRole
    {
    }

    public class ApplicationDbContext : IdentityDbContext<HotmenuAdmin>
    {
        public ApplicationDbContext()
        {

        }
    }
}
