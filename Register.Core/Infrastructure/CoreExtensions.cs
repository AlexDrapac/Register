using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Register.Core.BusinessLogic;
using Register.Core.Interfaces;
using Register.Data.Infrastructure;

namespace Register.Core.Infrastructure
{
    public static class CoreExtensions
    {
        public static IServiceCollection AddCoreServices(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            serviceCollection.AddDataAccesServices(configuration);
            serviceCollection.AddTransient<IAuthentificationBusinessLogic, AuthentificationBusinessLogic>();
            return serviceCollection;
        }
    }
}
