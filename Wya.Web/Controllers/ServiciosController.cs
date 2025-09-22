using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ServiciosController : Controller
    {
        public IActionResult Index()
        {
            return View("Servicios");
        }
    }
}
