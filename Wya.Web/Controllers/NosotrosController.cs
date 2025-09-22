using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class NosotrosController : Controller
    {
        public IActionResult Index()
        {
            return View("Nosotros");
        }
    }
}
