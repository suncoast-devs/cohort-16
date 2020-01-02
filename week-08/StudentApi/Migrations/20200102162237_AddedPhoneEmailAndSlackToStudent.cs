using Microsoft.EntityFrameworkCore.Migrations;

namespace StudentApi.Migrations
{
  public partial class AddedPhoneEmailAndSlackToStudent : Migration
  {
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.AddColumn<string>(
          name: "Email",
          table: "Students",
          nullable: true);

      migrationBuilder.AddColumn<string>(
          name: "PhoneNumber",
          table: "Students",
          nullable: true);

      migrationBuilder.AddColumn<string>(
          name: "SlackName",
          table: "Students",
          nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropColumn(
          name: "Email",
          table: "Students");

      migrationBuilder.DropColumn(
          name: "PhoneNumber",
          table: "Students");

      migrationBuilder.DropColumn(
          name: "SlackName",
          table: "Students");
    }
  }
}
