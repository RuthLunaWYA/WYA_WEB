using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult Index()
        {
            return View("Services");
        }
    }
}
