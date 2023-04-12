using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class User: IdentityUser
    {
        public string DisplyaName { get; set; }
        // public string Bio { get; set; }
    }
}