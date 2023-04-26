using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace StarDeckAPI.Models;

public partial class StarDeckContext : DbContext
{
    public StarDeckContext(){ }

    public StarDeckContext(DbContextOptions<StarDeckContext> options)
        : base(options){ }

    public virtual DbSet<Administrador> Administradores { get; set; }

    public virtual DbSet<CartaJugador> CartaJugadores { get; set; }

    public virtual DbSet<Carta> Cartas { get; set; }

    public virtual DbSet<Jugador> Jugadores { get; set; }

    public virtual DbSet<Paises> Paises { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=StarDeck;Trusted_Connection=true;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administrador>(entity =>
        {
            entity.HasKey(e => e.Idadmin).HasName("PK__ADMINIST__5B93BD6E3B767F99");

            entity.ToTable("ADMINISTRADOR");

            entity.Property(e => e.Idadmin)
                .ValueGeneratedNever()
                .HasColumnName("idadmin");
            entity.Property(e => e.Apellido)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("apellido");
            entity.Property(e => e.Correo)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Pass)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("pass");
        });

        modelBuilder.Entity<CartaJugador>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("CARTA_JUGADOR");

            entity.Property(e => e.Cantidad).HasColumnName("cantidad");
            entity.Property(e => e.Idcarta).HasColumnName("idcarta");
            entity.Property(e => e.Idjugador).HasColumnName("idjugador");

            entity.HasOne(d => d.IdcartaNavigation).WithMany()
                .HasForeignKey(d => d.Idcarta)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CARTA_JUG__idcar__7B264821");

            entity.HasOne(d => d.IdjugadorNavigation).WithMany()
                .HasForeignKey(d => d.Idjugador)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CARTA_JUG__idjug__7C1A6C5A");
        });

        modelBuilder.Entity<Carta>(entity =>
        {
            entity.HasKey(e => e.Idcarta).HasName("PK__CARTA__0515CC3380DA1467");

            entity.ToTable("CARTA");

            entity.Property(e => e.Idcarta)
                .ValueGeneratedNever()
                .HasColumnName("idcarta");
            entity.Property(e => e.Costo).HasColumnName("costo");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Disponibilidad).HasColumnName("disponibilidad");
            entity.Property(e => e.Energia).HasColumnName("energia");
            entity.Property(e => e.Idadmin).HasColumnName("idadmin");
            entity.Property(e => e.Imagen)
                .HasMaxLength(1000)
                .IsUnicode(false)
                .HasColumnName("imagen");
            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Raza)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("raza");
            entity.Property(e => e.Tipo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("tipo");

            entity.HasOne(d => d.IdadminNavigation).WithMany(p => p.Cartas)
                .HasForeignKey(d => d.Idadmin)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__CARTA__idadmin__7A3223E8");
        });

        modelBuilder.Entity<Jugador>(entity =>
        {
            entity.HasKey(e => e.Idjugador).HasName("PK__JUGADOR__1D4F670FB5AB6F77");

            entity.ToTable("JUGADOR");

            entity.Property(e => e.Idjugador)
                .ValueGeneratedNever()
                .HasColumnName("idjugador");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.Avatar).HasColumnName("avatar");
            entity.Property(e => e.Correo)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Estadodecuenta).HasColumnName("estadodecuenta");
            entity.Property(e => e.Idpais).HasColumnName("idpais");
            entity.Property(e => e.Nacionalidad)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("nacionalidad");
            entity.Property(e => e.Nombre)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Pass)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("pass");
            entity.Property(e => e.Usuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("usuario");

            entity.HasOne(d => d.IdpaisNavigation).WithMany(p => p.Jugadores)
                .HasForeignKey(d => d.Idpais)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__JUGADOR__idpais__793DFFAF");
        });

        modelBuilder.Entity<Paises>(entity =>
        {
            entity.HasKey(e => e.Idpais).HasName("PK__PAISES__55A00515E82151B0");

            entity.ToTable("PAISES");

            entity.Property(e => e.Idpais)
                .ValueGeneratedNever()
                .HasColumnName("idpais");
            entity.Property(e => e.Pais)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("pais");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
