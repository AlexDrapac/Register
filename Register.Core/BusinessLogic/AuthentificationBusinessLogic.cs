using Microsoft.AspNetCore.Identity;
using Register.Core.Interfaces;
using Register.Core.Models;
using Register.WebApi.Areas.Identity.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Register.Core.BusinessLogic
{
    public class AuthentificationBusinessLogic : IAuthentificationBusinessLogic
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthentificationBusinessLogic(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }



        public async Task<object> Register(ApplicationUserModel applicationUser)
        {
            ApplicationUser registerUser = new ApplicationUser()
            {
                UserName = applicationUser.UserName,
                Email = applicationUser.Email,
                FullName = applicationUser.FullName,
                EmailConfirmed = false
            };

            var result = await _userManager.CreateAsync(registerUser, applicationUser.Password);

            if (result.Succeeded)
            {
                return "Register Success";
            }
            else
                return "Register Failed";
        }
    }
}
