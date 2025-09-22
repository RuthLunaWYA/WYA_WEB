using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ContactoController : Controller
    {
        public IActionResult Index()
        {
            return View("Contacto");
        }
    }
}
