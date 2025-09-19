using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ClientsController : Controller
    {
        public IActionResult Index()
        {
            return View("Clients");
        }
    }
}
