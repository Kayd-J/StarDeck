using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace StarDeckAPI.Models;

public partial class StarDeckContext : DbContext
{
    public StarDeckContext()
    {
    }

    public StarDeckContext(DbContextOptions<StarDeckContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Administradores> Administradores { get; set; }

    public virtual DbSet<Auth> Auths { get; set; }

    public virtual DbSet<Cartas> Cartas { get; set; }

    public virtual DbSet<CartasJugadores> CartasJugadores { get; set; }

    public virtual DbSet<Decks> Decks { get; set; }

    public virtual DbSet<Jugadores> Jugadores { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Paises> Paises { get; set; }

    public virtual DbSet<Planetas> Planetas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=StarDeck;Trusted_Connection=true;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administradores>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ADMINIST__3214EC0796897B37");

            entity.ToTable("ADMINISTRADORES");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Apellido)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Pass)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Auth>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("AUTH");

            entity.Property(e => e.Password)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Usuario)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Cartas>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CARTAS__3214EC070F025121");

            entity.ToTable("CARTAS");

            entity.Property(e => e.Id)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.Descripcion)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.Imagen)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Raza)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Tipo)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Administradores).WithMany(p => p.Carta)
                .HasForeignKey(d => d.AdministradoresId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CARTAS__Administ__656C112C");
        });

        modelBuilder.Entity<CartasJugadores>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("CARTAS_JUGADORES");

            entity.Property(e => e.CartasId)
                .HasMaxLength(14)
                .IsUnicode(false)
                .HasColumnName("cartasId");
            entity.Property(e => e.JugadoresId)
                .HasMaxLength(14)
                .IsUnicode(false);

            entity.HasOne(d => d.Cartas).WithMany()
                .HasForeignKey(d => d.CartasId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CARTAS_JU__carta__66603565");

            entity.HasOne(d => d.Jugadores).WithMany()
                .HasForeignKey(d => d.JugadoresId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CARTAS_JU__Jugad__6754599E");
        });

        modelBuilder.Entity<Decks>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__DECKS__3214EC0771D08259");

            entity.ToTable("DECKS");

            entity.Property(e => e.Id)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.JugadoresId)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Jugadores).WithMany(p => p.Decks)
                .HasForeignKey(d => d.JugadoresId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__DECKS__Jugadores__68487DD7");

            entity.HasMany(d => d.Cartas).WithMany(p => p.Decks)
                .UsingEntity<Dictionary<string, object>>(
                    "DecksCarta",
                    r => r.HasOne<Cartas>().WithMany()
                        .HasForeignKey("CartasId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__DECKS_CAR__Carta__6A30C649"),
                    l => l.HasOne<Decks>().WithMany()
                        .HasForeignKey("DecksId")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__DECKS_CAR__Decks__6B24EA82"),
                    j =>
                    {
                        j.HasKey("DecksId", "CartasId").HasName("PK__DECKS_CA__E757EAE66C4B749B");
                        j.ToTable("DECKS_CARTAS");
                        j.IndexerProperty<string>("DecksId")
                            .HasMaxLength(14)
                            .IsUnicode(false);
                        j.IndexerProperty<string>("CartasId")
                            .HasMaxLength(14)
                            .IsUnicode(false);
                    });
        });

        modelBuilder.Entity<Jugadores>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__JUGADORE__3214EC07CBB6E1E5");

            entity.ToTable("JUGADORES");

            entity.Property(e => e.Id)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.Apellidos)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Avatar)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.Correo)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Nacionalidad)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.PaisesId).HasColumnName("paisesId");
            entity.Property(e => e.Pass)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Usuario)
                .HasMaxLength(20)
                .IsUnicode(false);

            entity.HasOne(d => d.Paises).WithMany(p => p.Jugadores)
                .HasForeignKey(d => d.PaisesId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__JUGADORES__paise__6477ECF3");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("LOGIN");

            entity.Property(e => e.Status)
                .HasMaxLength(10)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Paises>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PAISES__3214EC07A3B92BAD");

            entity.ToTable("PAISES");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Pais)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("pais");
        });

        modelBuilder.Entity<Planetas>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PLANETAS__3214EC07DD31E807");

            entity.ToTable("PLANETAS");

            entity.Property(e => e.Id)
                .HasMaxLength(14)
                .IsUnicode(false);
            entity.Property(e => e.Descripcion)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Tipo)
                .HasMaxLength(30)
                .IsUnicode(false);

            entity.HasOne(d => d.Administradores).WithMany(p => p.Planeta)
                .HasForeignKey(d => d.AdministradoresId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PLANETAS__Admini__693CA210");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
