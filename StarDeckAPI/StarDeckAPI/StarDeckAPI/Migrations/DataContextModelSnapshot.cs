﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StarDeckAPI.Data;

#nullable disable

namespace StarDeckAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CartaJugador", b =>
                {
                    b.Property<string>("JugadoresId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("cartasId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("JugadoresId", "cartasId");

                    b.HasIndex("cartasId");

                    b.ToTable("CartaJugador");
                });

            modelBuilder.Entity("DetailTEC.Models.Auth", b =>
                {
                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Usuario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("Auth");
                });

            modelBuilder.Entity("DetailTEC.Models.Login", b =>
                {
                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("Login");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Admin", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Correo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pass")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Administradores");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Carta", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AdministradoresId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Costo")
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Disponibilidad")
                        .HasColumnType("bit");

                    b.Property<int>("Energia")
                        .HasColumnType("int");

                    b.Property<string>("Imagen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Raza")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AdministradoresId");

                    b.ToTable("Cartas");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Jugador", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Apellidos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Avatar")
                        .HasColumnType("int");

                    b.Property<string>("Correo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Estadodecuenta")
                        .HasColumnType("bit");

                    b.Property<string>("Nacionalidad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pass")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Usuario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Jugadores");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Pais", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("JugadoresId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("pais")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("JugadoresId");

                    b.ToTable("Paises");
                });

            modelBuilder.Entity("CartaJugador", b =>
                {
                    b.HasOne("StarDeckAPI.Models.Jugador", null)
                        .WithMany()
                        .HasForeignKey("JugadoresId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("StarDeckAPI.Models.Carta", null)
                        .WithMany()
                        .HasForeignKey("cartasId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("StarDeckAPI.Models.Carta", b =>
                {
                    b.HasOne("StarDeckAPI.Models.Admin", "Administradores")
                        .WithMany("Cartas")
                        .HasForeignKey("AdministradoresId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Administradores");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Pais", b =>
                {
                    b.HasOne("StarDeckAPI.Models.Jugador", "Jugadores")
                        .WithMany("Paises")
                        .HasForeignKey("JugadoresId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Jugadores");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Admin", b =>
                {
                    b.Navigation("Cartas");
                });

            modelBuilder.Entity("StarDeckAPI.Models.Jugador", b =>
                {
                    b.Navigation("Paises");
                });
#pragma warning restore 612, 618
        }
    }
}
