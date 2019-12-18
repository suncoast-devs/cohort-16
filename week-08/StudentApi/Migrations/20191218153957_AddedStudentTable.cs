using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace StudentApi.Migrations
{
  public partial class AddedStudentTable : Migration
  {
    protected override void Up(MigrationBuilder migrationBuilder)
    {


      migrationBuilder.CreateTable(
          name: "Students",
          columns: table => new
          {
            Id = table.Column<int>(nullable: false)
                  .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
            FullName = table.Column<string>(nullable: true),
            GPA = table.Column<double>(nullable: true),
            IsJoyful = table.Column<bool>(nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Students", x => x.Id);
          });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropTable(
          name: "Students");


    }
  }
}
