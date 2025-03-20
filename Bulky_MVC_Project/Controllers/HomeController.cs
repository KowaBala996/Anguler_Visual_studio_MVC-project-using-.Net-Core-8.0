
using Microsoft.AspNetCore.Mvc;

namespace Bulky_MVC_Project.Controllers
{
    public class HomeController : Controller
    {

        private readonly HttpClient _httpClient;

        public HomeController(HttpClient httpClient)

        {

            _httpClient = httpClient;

        }

        [HttpGet]

        [Route("api/customeraddress")]

        public async Task<IActionResult> GetAll()

        {

            try

            {


                var response = await _httpClient.GetAsync("http://localhost:5128/api/customer-address/all");

                if (response.IsSuccessStatusCode)

                {

                    var customeraddressJson = await response.Content.ReadAsStringAsync();

                    return Ok(customeraddressJson);

                }

                else

                {

                    return StatusCode((int)response.StatusCode, $"Failed to fetch customeraddress. Status Code: {response.StatusCode}");

                }

            }

            catch (Exception ex)

            {


                return StatusCode(500, $"Internal server error: {ex.Message}");

            }

        }


        [HttpGet]

        [Route("api/customer")]

        public async Task<IActionResult> GetAllUsersAsync()

        {

            try

            {


                var response = await _httpClient.GetAsync("http://localhost:5128/api/User/GetAllUsersAsync");

                if (response.IsSuccessStatusCode)

                {

                    var customerJson = await response.Content.ReadAsStringAsync();

                    return Ok(customerJson);

                }

                else

                {

                    return StatusCode((int)response.StatusCode, $"Failed to fetch customer. Status Code: {response.StatusCode}");

                }

            }

            catch (Exception ex)

            {


                return StatusCode(500, $"Internal server error: {ex.Message}");

            }

        }

        [HttpPost]
        [Route("api/CreateUserAsync")]
        public async Task<IActionResult> CreateUserAsync()
        {
            try
            {
                var content = new StringContent(""); 
                var response = await _httpClient.PostAsync("http://localhost:5128/api/User/CreateUserAsync", content);

                if (response.IsSuccessStatusCode)
                {
                    var customerJson = await response.Content.ReadAsStringAsync();
                    return Ok(customerJson);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, $"Failed to fetch customer. Status Code: {response.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


    }
}



