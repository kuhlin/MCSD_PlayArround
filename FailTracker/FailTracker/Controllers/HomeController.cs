using FailTracker.Web2.Data;
using System.Web.Mvc;

namespace FailTracker.Web2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _contex;

        public ActionResult Index()
        {
            return View();
        }

    }
}