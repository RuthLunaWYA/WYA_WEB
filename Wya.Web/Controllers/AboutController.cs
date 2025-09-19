using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View("About");
        }
    }
}
