using Microsoft.EntityFrameworkCore;

namespace StarDeckAPI.Data
{
    public class DataContext : DbContext
    {

    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Administrador> Administradores { get; set; }


        //public DbSet<CartaJugador> CartaJugadores { get; set; }

        public DbSet<Carta> Cartas { get; set; }

        public DbSet<Jugador> Jugadores { get; set; }

        public DbSet<Paises> Paises { get; set; }

       // protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Administrador>()
        //        .HasKey(a => a.Id);

        //    modelBuilder.Entity<Carta>()
        //        .HasKey(a => a.Id);

       //     modelBuilder.Entity<Jugador>()
        //        .HasKey(a => a.Id);
       //     modelBuilder.Entity<Paises>()
        //        .HasKey(a => a.Id);

       // }
    }

}
