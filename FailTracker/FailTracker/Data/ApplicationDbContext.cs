using FailTracker.Web2.Domain;
using Microsoft.AspNet.Identity.EntityFramework;

namespace FailTracker.Web2.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }
    }
}