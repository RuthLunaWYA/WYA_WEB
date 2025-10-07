using Microsoft.AspNetCore.Mvc;

namespace Wya.Web.Controllers
{
    [Route("Servicios/Dedicados")]
    public class ServiciosDedicadosController : Controller
    {
        // Ruta: /Servicios/Dedicados
        [HttpGet("")]
        public IActionResult Index()
        {
            // Si tienes una vista general de "Dedicados"
            return View("Dedicados");
        }

        // Ruta: /Servicios/Dedicados/FibraOptica
        [HttpGet("FibraOptica")]
        public IActionResult FibraOptica()
        {
            return View("~/Views/ServiciosDedicados/FibraOptica.cshtml");
        }

        // Ruta: /Servicios/Dedicados/TarifasPlanes
        [HttpGet("TarifasPlanes")]
        public IActionResult TarifasPlanes()
        {
            return View("~/Views/ServiciosDedicados/TarifasPlanes.cshtml");
        }

        // Ruta: /Servicios/Dedicados/TelefoniaVoip
        [HttpGet("TelefoniaVoip")]
        public IActionResult TelefoniaVoip()
        {
            return View("~/Views/ServiciosDedicados/TelefoniaVoip.cshtml");
        }

        // Ruta: /Servicios/Dedicados/CorreoZimbra
        [HttpGet("CorreoZimbra")]
        public IActionResult CorreoZimbra()
        {
            return View("~/Views/ServiciosDedicados/CorreoZimbra.cshtml");
        }
    }
}
