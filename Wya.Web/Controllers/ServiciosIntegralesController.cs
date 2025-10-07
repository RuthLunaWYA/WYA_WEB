using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    [Route("Servicios")]
    public class ServiciosIntegralesController : Controller
    {
        [Route("Integrales")]
        public IActionResult Integrales()
        {
            // Carga la vista: Views/Servicios/Integrales.cshtml
            return View("Integrales");
        }
    }
}
