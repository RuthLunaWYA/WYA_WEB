using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View("Contact");
        }
    }
}
