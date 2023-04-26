using DetailTEC.Models;
using Microsoft.EntityFrameworkCore;

namespace StarDeckAPI.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Administrador> Administradores { get; set; }

        public DbSet<Carta> Cartas { get; set; }

        public DbSet<Jugador> Jugadores { get; set; }

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
