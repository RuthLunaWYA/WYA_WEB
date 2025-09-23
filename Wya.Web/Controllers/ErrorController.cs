// In Controllers/ErrorController.cs
using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    public class ErrorController : Controller
    {
        public IActionResult Error404()
        {
            return View();
        }
    }
}