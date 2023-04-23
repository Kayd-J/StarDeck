namespace StarDeckAPI.Models
{
    public class Jugador
    {
        public int ID { get; set; }

        public string Nombre { get; set; } = string.Empty;

        public string Apellido { get; set; } = string.Empty;

        public string Usuario { get; set; } = string.Empty;

        public int País { get; set; }

        public string Avatar { get; set; } = string.Empty;

        public string Correo { get; set; } = string.Empty;

        public string Contraseña { get; set; } = string.Empty;

        public int Estado { get; set; }
    }
}
