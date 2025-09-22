using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class CarreraController : Controller
    {
        public IActionResult Index()
        {
            return View("Carrera");
        }
    }
}
