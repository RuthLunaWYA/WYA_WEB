using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class CareersController : Controller
    {
        public IActionResult Index()
        {
            return View("Carrers");
        }
    }
}
