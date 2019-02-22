

import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;

import java.util.Date;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Info
 */
@WebServlet("/Info")
public class Info extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Info() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
	
		//Direccion IP usuario
		InetAddress IP;
		IP = InetAddress.getLocalHost();
				
		//Fecha del sistema
		Date fecha = new Date();
		fecha.toString();
		
		String actividad = request.getParameter("actividad");
		String alumno = request.getParameter("alumno");

		out.println("<p>Dirección ip: " + IP + "</p>\n");
		out.println("<p>Fecha: " + fecha + "</p>\n");

		out.println("<p> Actividad: " + actividad + " </p>\n");
		out.println("<p> Alumno: " + alumno + " </p>\n");
		
		out.println("<p> Cambio realizado correctamente! </p>\n");


		out.println("<a href='Index'> Volver </a>");				
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
