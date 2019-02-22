

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Index
 */
@WebServlet("/Index")
public class Index extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Index() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		/*
		 * Queda por hacer que cuando clickes dependiendo del estado se autorice o no. Esto he pensado en un metodo que mire si está o no autorizado 
		 * que es @method cambioAutorizado() y que al clickar submit que cambie su estado. El caso es que no sé como hacer para que al hacer submit haga está acción 
		 * como tal. Otra cosa que había pensado es en pasar el objeto Alumno al otro servlet y ahí hacer el cambio de estado de la misma forma con un if que compruebe 
		 * el estado y que lo cambie pero no sé como hacerlo. He intentado pasar el objeto por sesiones pero da errores también y no sé como solucionarlos. 
		 * */
		ConexionBD usuario = new ConexionBD();
		PrintWriter out = response.getWriter();
		
		usuario.setServidor("192.168.100.171"); //servidor
		usuario.setBd("alumnosdb"); //bbdd
		usuario.setUsuario("betatest"); //user
		usuario.setContrasenya("ts3t4t3b"); //pass
		
		out.println("<p> Servidor: " + usuario.getServidor() + " </p>\n"); //servidor
		out.println("<p> Base de datos: " + usuario.getBd() +"</p>\n"); //bbdd  
		out.println("<p> Usuario: " + usuario.getUsuario() + " </p>\n"); //usuario
		out.println("<p> Contrasenya: " + usuario.getContrasenya() + " </p>\n"); //passs
				
		Alumno[] alumno = miJDBC.dameAlumnos(usuario);

		for(int i = 0; i < alumno.length; i++ ) {
			for(int j =  0; j < alumno[i].getActividades().length; j++) {
				String actividad = alumno[i].getActividades()[j].getNombre();
				
				boolean autorizado = alumno[i].getActividades()[j].isAutorizado();
				
				out.println("<form action='Info' method='POST'>");
				out.print("Nombre: <input name='alumno' value='"+ alumno[i].getNombre() +"' readonly> Actividad: <input name='actividad' value='"+ actividad +"' readonly>");
								
				out.println("<input type='submit' onclick='cambioAutorizado(alumno, i, j)'>");
				
				if(autorizado) {
					out.println("autorizado");
				}else {
					out.println("no autorizado");
				}	
				out.println("</form>");
			}
			out.println("</form>");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	protected void cambioAutorizado(Alumno[] alumno, int i, int j) {
		boolean autorizado = alumno[i].getActividades()[j].isAutorizado();

		if(autorizado) {
			autorizado = false;
		}else {
			autorizado = true;
		}
	}

}
