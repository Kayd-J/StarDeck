namespace StarDeckAPI.Models
{
    public class Carta
    {
        public int ID { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string Tipo { get; set; } = string.Empty;   
        public string Raza { get; set; } = string.Empty;
        public int Energia { get; set; } 
        public int Costo{ get; set; }
        public bool Disponibilidad { get; set; }
    }
}
