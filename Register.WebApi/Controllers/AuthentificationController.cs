using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Register.Core.Interfaces;
using Register.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Register.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthentificationController : ControllerBase
    {

        private readonly IAuthentificationBusinessLogic _repo;

        public AuthentificationController(IAuthentificationBusinessLogic repo)
        {
            _repo = repo;
        }

        [HttpPost("Register")]
        public Task<Object> Register(ApplicationUserModel applicationUser)
        {
            return _repo.Register(applicationUser);
        }
    }
}
