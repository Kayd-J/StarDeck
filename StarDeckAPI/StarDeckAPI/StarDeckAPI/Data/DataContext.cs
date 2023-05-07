using StarDeckAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace StarDeckAPI.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Administradores> Administradores { get; set; }

        public DbSet<Cartas> Cartas { get; set; }
        public void AddCard(string Id, int Energia, string Raza, int Costo, string Nombre, string Tipo, string Descripcion, bool Disponibilidad, 
                            string Imagen, int AdministradoresId)
        {
            var IdParameter = new SqlParameter("@Id", Id);
            var EnergiaParameter = new SqlParameter("@Energia", Energia);
            var RazaParameter = new SqlParameter("@Raza", Raza);
            var CostoParameter = new SqlParameter("@Costo", Costo);
            var NombreParameter = new SqlParameter("@Nombre", Nombre);
            var TipoParameter = new SqlParameter("@Tipo", Tipo);
            var DescripcionParameter = new SqlParameter("@Descripcion", Descripcion);
            var DisponibilidadParameter = new SqlParameter("@Disponibilidad", Disponibilidad);
            var ImagenParameter = new SqlParameter("@Imagen", Imagen);
            var AdministradoresIdParameter = new SqlParameter("@AdministradoresId", AdministradoresId);

            Database.ExecuteSqlRaw("EXEC dbo.AddCard @Id, @Energia, @Raza, @Costo,@Nombre ,@Tipo ,@Descripcion ,@Disponibilidad, @Imagen ,@AdministradoresId",
                IdParameter, EnergiaParameter, RazaParameter, CostoParameter, NombreParameter,
                TipoParameter, DescripcionParameter, DisponibilidadParameter, ImagenParameter, AdministradoresIdParameter);
        }
        public DbSet<Planetas> Planetas { get; set; }
        public DbSet<Decks> Decks { get; set; }

        public DbSet<Jugadores> Jugadores { get; set; }

        public DbSet<Paises> Paises { get; set; }

        public DbSet<Auth> Auth { get; set; }

        public DbSet<Login> Login { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Auth>()
                .HasNoKey();

            modelBuilder.Entity<Login>()
                .HasNoKey();

        }

    }
}
