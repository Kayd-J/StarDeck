using StarDeckAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace StarDeckAPI.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Administradores> Administradores { get; set; }

        public DbSet<Cartas> Cartas { get; set; }

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
