using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ClientesController : Controller
    {
        public IActionResult Index()
        {
            return View("Clientes");
        }
    }
}
