using Register.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Register.Core.Interfaces
{
    public interface IAuthentificationBusinessLogic
    {
        Task<Object> Register(ApplicationUserModel applicationUser);
    }
}
